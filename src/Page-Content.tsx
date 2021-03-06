import Page from './Pages'

function PageContent(): JSX.Element {
    let mapArray = [
        {
            title : "Machu Picchu",
            placename : "Cusco",
            countryname : "Peru",
            mainimage   : "Sun rising over Machu Picchu",
            main_image_address : "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            link_to_rough_location : "https://goo.gl/maps/9BkQALg25vHjRpVc7",
            description : "Having trekked for 4 days along the Inca trail,seeing the sun rise over Machu Picchu was one of the best experiences of my life."
        },
        {
            title : "Godrevy Beach",
            placename : "Gwithian",
            countryname : "Cornwall",
            mainimage   : "Tide out at Godrevy beach",
            main_image_address : "https://images.unsplash.com/photo-1622904220969-869979a5cecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
            link_to_rough_location : "https://goo.gl/maps/Cqst7PEZmNxVsR5a6",
            description : "The closest beach to my house, has been a family favourite for years and nothing beats a bbq on it after a day of surfing."
        },
        {
            title :"Twickenham Stadium",
            placename :"Twickenham",
            countryname :"London",
            mainimage   :"England vs Australia at Twickenham Stadium",
            main_image_address :"https://media.tacdn.com/media/attractions-splice-spp-674x446/07/9b/da/1f.jpg",
            link_to_rough_location :"https://goo.gl/maps/EqfNoXoQ1txH1odr8",
            description :"It's a bit sad but probably been the happiest I have ever been watching England beat New Zealand here."
        },
        {
            title :"Buenos Aires",
            placename :"Buenos Aires",
            countryname :"Argentina",
            mainimage   :"Boca District in Buenos Aires",
            main_image_address :"https://images.unsplash.com/photo-1612294043468-2904c075bcfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            link_to_rough_location :"https://goo.gl/maps/rbMungw8mkQHgzFv8",
            description :"Like Europe in South America with better football, more red meat and better wine"
        }
    ]
    return (
        <main>
        {mapArray.map((placeObject) => (
            <Page
                title = {placeObject.title}
                placename = {placeObject.placename}
                countryname = {placeObject.countryname}
                mainimage = {placeObject.mainimage}
                main_image_address = {placeObject.main_image_address}
                link_to_rough_location = {placeObject.link_to_rough_location}
                description = {placeObject.description}
            />
        ))}

            
    </main>
    )
}

export default PageContent