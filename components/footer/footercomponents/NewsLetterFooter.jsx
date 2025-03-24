// Composant QuickLinksSection
export default function QuickLinksSection() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-gray-400 hover:text-white">
            Programme
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">
            Speakers
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">
            Sponsors
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
}
