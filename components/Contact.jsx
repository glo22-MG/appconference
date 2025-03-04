"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      nom: '',
      email: '',
      objet: '',
      message: ''
    }
  });

  const [status, setStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const sendMail = async (formData) => {
    try {
      setStatus({ type: 'pending', message: 'Envoi en cours...' });
      
      const templateParams = {
        name: formData.nom,
        email: formData.email,
        subject: formData.objet,
        message: formData.message
      };

      const response = await emailjs.send(
        'service_g24e5e9',
        'template_lvy564e',
        templateParams,
        'h4CTjEfgsIK9rA1jA'
      );

      setStatus({ type: 'success', message: 'Votre message a été envoyé avec succès!' });
      reset();
      
      // Effacer le message après 5 secondes
      setTimeout(() => {
        setStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Erreur:', error);
      setStatus({ 
        type: 'error', 
        message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.'
      });
    }
  };

  const focusField = (fieldName) => {
    setActiveField(fieldName);
  };

  const blurField = () => {
    setActiveField(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* En-tête flottant */}
        <div className="relative mb-16">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-black shadow-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="bg-white rounded-lg shadow-xl py-8 px-6 mt-10">
            <h1 className="text-3xl font-extrabold text-center text-gray-900 mt-6">
              Entrons en contact
            </h1>
            <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
              Nous serions ravis de discuter de votre projet. Remplissez le
              formulaire ci-dessous et nous vous répondrons dans les plus brefs
              délais.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-black text-white p-6 transform transition-all duration-300 hover:scale-105">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 bg-gray-800 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-32 w-32 bg-gray-900 rounded-full opacity-20"></div>

            <h2 className="text-2xl font-bold mb-6 relative z-10">
              Coordonnées
            </h2>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Email</p>
                  <p className="mt-1 text-gray-300">contact@techconf.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Téléphone</p>
                  <p className="mt-1 text-gray-300">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Adresse</p>
                  <p className="mt-1 text-gray-300">
                    123 rue de la Tech, Paris
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-700 relative z-10">
              <h3 className="font-medium mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-xl p-6 relative overflow-hidden">
            {/* Formes décoratives */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-200 rounded-tr-full opacity-40"></div>

            {/* Message de statut */}
            {status && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : status.type === 'error'
                      ? 'bg-red-100 text-red-800 border border-red-200'
                      : 'bg-gray-100 text-gray-800 border border-gray-200'
                }`}
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    {status.type === 'success' && (
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {status.type === 'error' && (
                      <svg
                        className="h-5 w-5 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {status.type === 'pending' && (
                      <svg
                        className="h-5 w-5 text-gray-500 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit(sendMail)}
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={`relative transition-all duration-300 ${
                    activeField === 'nom' ? 'transform -translate-y-1' : ''
                  }`}
                >
                  <label
                    className={`block text-sm font-medium ${
                      errors.nom
                        ? 'text-red-600'
                        : activeField === 'nom'
                          ? 'text-black'
                          : 'text-gray-700'
                    }`}
                  >
                    Nom complet
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          errors.nom
                            ? 'text-red-400'
                            : activeField === 'nom'
                              ? 'text-gray-600'
                              : 'text-gray-400'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      {...register('nom', { required: 'Le nom est requis' })}
                      onFocus={() => focusField('nom')}
                      onBlur={blurField}
                      type="text"
                      className={`block w-full pl-10 pr-3 py-3 border ${
                        errors.nom
                          ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
                          : activeField === 'nom'
                            ? 'border-gray-500 focus:ring-black focus:border-black'
                            : 'border-gray-300 focus:ring-black focus:border-black'
                      } rounded-md shadow-sm placeholder-gray-400`}
                      placeholder="Votre nom"
                    />
                  </div>
                  {errors.nom && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.nom.message}
                    </p>
                  )}
                </div>

                <div
                  className={`relative transition-all duration-300 ${
                    activeField === 'email' ? 'transform -translate-y-1' : ''
                  }`}
                >
                  <label
                    className={`block text-sm font-medium ${
                      errors.email
                        ? 'text-red-600'
                        : activeField === 'email'
                          ? 'text-black'
                          : 'text-gray-700'
                    }`}
                  >
                    Adresse email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          errors.email
                            ? 'text-red-400'
                            : activeField === 'email'
                              ? 'text-gray-600'
                              : 'text-gray-400'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      {...register('email', {
                        required: "L'email est requis",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Adresse email invalide',
                        },
                      })}
                      onFocus={() => focusField('email')}
                      onBlur={blurField}
                      type="email"
                      className={`block w-full pl-10 pr-3 py-3 border ${
                        errors.email
                          ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
                          : activeField === 'email'
                            ? 'border-gray-500 focus:ring-black focus:border-black'
                            : 'border-gray-300 focus:ring-black focus:border-black'
                      } rounded-md shadow-sm placeholder-gray-400`}
                      placeholder="votre@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`relative transition-all duration-300 ${
                  activeField === 'objet' ? 'transform -translate-y-1' : ''
                }`}
              >
                <label
                  className={`block text-sm font-medium ${
                    errors.objet
                      ? 'text-red-600'
                      : activeField === 'objet'
                        ? 'text-black'
                        : 'text-gray-700'
                  }`}
                >
                  Objet
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        errors.objet
                          ? 'text-red-400'
                          : activeField === 'objet'
                            ? 'text-gray-600'
                            : 'text-gray-400'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                      />
                    </svg>
                  </div>
                  <input
                    {...register('objet', { required: "L'objet est requis" })}
                    onFocus={() => focusField('objet')}
                    onBlur={blurField}
                    type="text"
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.objet
                        ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
                        : activeField === 'objet'
                          ? 'border-gray-500 focus:ring-black focus:border-black'
                          : 'border-gray-300 focus:ring-black focus:border-black'
                    } rounded-md shadow-sm placeholder-gray-400`}
                    placeholder="Sujet de votre message"
                  />
                </div>
                {errors.objet && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.objet.message}
                  </p>
                )}
              </div>

              <div
                className={`relative transition-all duration-300 ${
                  activeField === 'message' ? 'transform -translate-y-1' : ''
                }`}
              >
                <label
                  className={`block text-sm font-medium ${
                    errors.message
                      ? 'text-red-600'
                      : activeField === 'message'
                        ? 'text-black'
                        : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        errors.message
                          ? 'text-red-400'
                          : activeField === 'message'
                            ? 'text-gray-600'
                            : 'text-gray-400'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <textarea
                    {...register('message', {
                      required: 'Le message est requis',
                      minLength: {
                        value: 10,
                        message:
                          'Votre message doit contenir au moins 10 caractères',
                      },
                    })}
                    onFocus={() => focusField('message')}
                    onBlur={blurField}
                    rows="5"
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.message
                        ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
                        : activeField === 'message'
                          ? 'border-gray-500 focus:ring-black focus:border-black'
                          : 'border-gray-300 focus:ring-black focus:border-black'
                    } rounded-md shadow-sm placeholder-gray-400`}
                    placeholder="Votre message détaillé..."
                  ></textarea>
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 -mr-1 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
