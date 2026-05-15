import WalletConnect from '../components/WalletConnect'
import MangaReader from '../components/MangaReader'

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <WalletConnect />
      </div>

      <section>
        <h2 className="text-2xl font-bold">Featured Manga</h2>
        <MangaReader />
      </section>
    </div>
  )
}
