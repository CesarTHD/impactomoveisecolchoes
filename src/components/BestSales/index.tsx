import Mesas from "./Mesas";
import Sofas from "./Sofas";

export default function BestSales() {
    return (
        <div id="bestSales" className="w-full py-6">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-10 text-center">- Mais Vendidos -</h2>
            <Sofas />
        </div>
    )
}