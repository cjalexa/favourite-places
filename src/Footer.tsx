import SourceURL from "./image-sources"


function Footer() : JSX.Element {
    return (
        <div className = 'footer'>
            <SourceURL
                sourceName = {"Machu Picchu"}
                sourceUrl = {"https://images.unsplash.com/photo-1526392060635-9d6019884377?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}
            />
            <SourceURL
                sourceName= {"Godrevy Beach"}
                sourceUrl = {"https://images.unsplash.com/photo-1622904220969-869979a5cecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"}
            />
            <SourceURL
                sourceName= {"Twickenham Stadium"}
                sourceUrl = {"https://media.tacdn.com/media/attractions-splice-spp-674x446/07/9b/da/1f.jpg"}
            />
            <SourceURL
                sourceName= {"Boca District, Buenos Aires"}
                sourceUrl = {"https://images.unsplash.com/photo-1612294043468-2904c075bcfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}
            />
        </div>
    )
}

export default Footer