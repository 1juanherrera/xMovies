import { useParams } from "react-router-dom"
import { MovieGrid, PageHeader, TvGrid } from "../components";

export const Catalog = () => {

    const { category } = useParams();

    return (
        <>
            <PageHeader>
                { category === 'tv' ? 'Tv Series' : 'Movies' }
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    { category === 'tv' ? <TvGrid category={ category } /> : <MovieGrid category={ category }/> }
                </div>
            </div>
        </>
    )
}

