"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function ApplyPage() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('submitting');
    setError('');

    const formData = new FormData(form);
    const payload = {};

    // Support multi-value fields (e.g. checkboxes)
    for (const [key, value] of formData.entries()) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        if (Array.isArray(payload[key])) {
          payload[key].push(value);
        } else {
          payload[key] = [payload[key], value];
        }
      } else {
        payload[key] = value;
      }
    }

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let message = 'Something went wrong submitting your application.';
        try {
          const data = await res.json();
          if (data?.error) message = data.error;
        } catch (_) {
          // ignore JSON parse errors
        }
        throw new Error(message);
      }

      setStatus('success');
      if (form && typeof form.reset === 'function') {
        form.reset();
      }
    } catch (err) {
      setError(err.message || 'Something went wrong submitting your application.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-slate-950 text-white">
        <div className="section-container py-4 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            Peace Mentorship
          </Link>
          <Link href="/" className="text-xs text-slate-200 hover:text-white">
            ← Back to landing page
          </Link>
        </div>
      </header>

      <main className="section-container py-10 max-w-3xl">
        <div className="card overflow-hidden">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 px-6 py-8 text-white text-center">
            <p className="badge bg-white/10 text-amber-300 mb-3">Application Form</p>
            <h1 className="text-2xl sm:text-3xl font-bold">Apply to the Peace Mentorship Program</h1>
            <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-xl mx-auto">
              A 6-Month Faith-Based Mentorship Program for Young Professionals, College & Graduate Students. Please
              complete this short form to apply. This will take less than 3 minutes.
            </p>
          </div>

          <form className="hidden" onSubmit={handleSubmit} noValidate>
            <section>
              <h2 className="text-base font-semibold text-slate-900">Basic Information</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-slate-700">
                    First name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-slate-700">
                    Last name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block text-xs font-medium text-slate-700">
                  Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="phone" className="block text-xs font-medium text-slate-700">
                  Phone number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <p className="mt-1 text-[11px] text-slate-500">Please enter a valid phone number.</p>
              </div>
            </section>

            <section className="border-t border-slate-200 pt-6">
              <h2 className="text-base font-semibold text-slate-900">Personal Details</h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="ageGroup" className="block text-xs font-medium text-slate-700">
                    Age Group *
                  </label>
                  <select
                    id="ageGroup"
                    name="ageGroup"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Please Select</option>
                    <option value="18-21">18–21</option>
                    <option value="22-25">22–25</option>
                    <option value="26-30">26–30</option>
                    <option value="31-35">31–35</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <p className="block text-xs font-medium text-slate-700">Current Status *</p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {[
                      'College Student',
                      'Graduate / Professional Student',
                      'Young Professional (18-35)',
                      'Aspiring Christian Leader',
                      'Young Minister',
                      'Other',
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-xs"
                      >
                        <input
                          type="radio"
                          name="profile"
                          value={option}
                          className="h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-slate-300"
                          required
                        />
                        <span className="text-slate-800">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t border-slate-200 pt-6">
              <h2 className="text-base font-semibold text-slate-900">Spiritual &amp; Personal Background</h2>

              <div className="mt-4">
                <p className="block text-xs font-medium text-slate-700">Are you a Christian? *</p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs">
                  {['Yes', 'No', 'Not sure'].map((option) => (
                    <label
                      key={option}
                      className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2"
                    >
                      <input
                        type="radio"
                        name="isChristian"
                        value={option}
                        className="h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-slate-300"
                        required
                      />
                      <span className="text-slate-800">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="block text-xs font-medium text-slate-700">
                  What areas would you like to grow in? (Choose as many as apply) *
                </p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 text-xs">
                  {[
                    'Prayer & Spiritual Disciplines',
                    'Emotional Maturity & Healing',
                    'Discipline, Habits & Time Management',
                    'Relationships & Boundaries',
                    'Career & Academic Excellence',
                    'Understanding Calling & Purpose',
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2"
                    >
                      <input
                        type="checkbox"
                        name="growthAreas"
                        value={option}
                        className="h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-slate-300"
                        required
                      />
                      <span className="text-slate-800">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            <section className="border-t border-slate-200 pt-6">
              <h2 className="text-base font-semibold text-slate-900">Why This Mentorship?</h2>

              <div className="mt-4">
                <label htmlFor="faithJourney" className="block text-xs font-medium text-slate-700">
                  Briefly share your faith journey (2–3 sentences max) *
                </label>
                <textarea
                  id="faithJourney"
                  name="faithJourney"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="expectations" className="block text-xs font-medium text-slate-700">
                  Why would you like to join this mentorship program? (3–4 sentences max) *
                </label>
                <textarea
                  id="expectations"
                  name="expectations"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </section>

            <section className="border-t border-slate-200 pt-6 space-y-4">
              <h2 className="text-base font-semibold text-slate-900">Availability</h2>

              <div>
                <p className="block text-xs font-medium text-slate-700">
                  Can you commit to weekly sessions for 6 months? *
                </p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs">
                  {['Yes', 'No', 'Not sure'].map((option) => (
                    <label
                      key={option}
                      className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2"
                    >
                      <input
                        type="radio"
                        name="canCommit"
                        value={option}
                        className="h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-slate-300"
                        required
                      />
                      <span className="text-slate-800">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="preferredMeetingTime" className="block text-xs font-medium text-slate-700">
                  Preferred Meeting Time *
                </label>
                <select
                  id="preferredMeetingTime"
                  name="preferredMeetingTime"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Please Select</option>
                  <option value="weekday-evenings">Weekday evenings</option>
                  <option value="weekend-mornings">Weekend mornings</option>
                  <option value="weekend-evenings">Weekend evenings</option>
                  <option value="flexible">I am flexible</option>
                </select>
              </div>

              <h2 className="border-t border-slate-200 pt-6 text-base font-semibold text-slate-900">
                Emergency Contact
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="emergencyContactName" className="block text-xs font-medium text-slate-700">
                    Emergency Contact Name *
                  </label>
                  <input
                    id="emergencyContactName"
                    name="emergencyContactName"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="emergencyContactPhone" className="block text-xs font-medium text-slate-700">
                    Emergency Contact Phone Number *
                  </label>
                  <input
                    id="emergencyContactPhone"
                    name="emergencyContactPhone"
                    type="tel"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <p className="mt-1 text-[11px] text-slate-500">Please enter a valid phone number.</p>
                </div>
              </div>

              <h2 className="border-t border-slate-200 pt-6 text-base font-semibold text-slate-900">Agreement</h2>

              <label className="flex items-start gap-2 text-xs text-slate-700">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  I understand that this is a 6-month commitment and I agree to participate fully in the program
                  requirements.
                </span>
              </label>

              <div>
                <label htmlFor="signature" className="block text-xs font-medium text-slate-700">
                  Signature (type your full name) *
                </label>
                <input
                  id="signature"
                  name="signature"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
              </button>

              {status === 'success' && (
                <p className="text-[11px] text-emerald-700">
                  Thank you! Your application has been submitted. We will reach out to you by email.
                </p>
              )}

              {status === 'error' && (
                <p className="text-[11px] text-red-600">{error}</p>
              )}

              <p className="text-[11px] text-slate-500">
                * Your information is secure and will only be used for Peace Mentorship Program communication.
              </p>
            </section>
          </form>

          <div className="px-6 py-8">
            <iframe
              title="Peace Mentorship Program — Registration Form"
              src="https://form.jotform.com/253434409540050"
              className="w-full min-h-[1200px] border-0"
              loading="lazy"
              allow="fullscreen; clipboard-read; clipboard-write"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
