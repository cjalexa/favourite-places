import SourceURL from "./image-sources"


function Footer() : JSX.Element {
    return (
        <div className = 'footer'>
            <SourceURL
                sourceName = {"Machu Picchu"}
                sourceUrl = {"https://images.unsplash.com/photo-1526392060635-9d6019884377?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}
            />
        </div>
    )
}

export default Footer