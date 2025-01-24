// Composant NewsletterSection
export default function NewsletterFooter() {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Votre email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            S&apos;abonner
          </button>
        </form>
      </div>
    );
  }