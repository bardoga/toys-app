import { ToyPreview } from '../cmp/toy-preview.jsx'

export function ToyList({ toys,onRemoveToy }) {

    return (
        <section className="toy-list">
            {toys.map(toy => <ToyPreview toy={toy} key={toy._id} onRemoveToy={onRemoveToy} />)}
        </section>
    )
}