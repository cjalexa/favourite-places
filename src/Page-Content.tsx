import Page from './Pages'

function PageContent(): JSX.Element {
    return (
        <main>
            <Page
            title = {"Machu Picchu"}
            placename = {"Cusco"}
            countryname = {"Peru"}
            mainimage   = {"Sun rising over Machu Picchu"}
            main_image_address = {"https://www.dropbox.com/s/prxx6kl6guxaey6/2016-06-18%2007.12.10%20HDR-2.jpg?dl=0"}
            link_to_rough_location = {"https://goo.gl/maps/9BkQALg25vHjRpVc7"}
            description = {"Having trekked for 4 days along the Inca trail,seeing the sun rise over Machu Picchu was one of the best experiences of my life."}
            />
            <Page
            title = {"Godrevy Beach"}
            placename = {"Gwithian"}
            countryname = {"Cornwall"}
            mainimage   = {"Tide out at Godrevy beach"}
            main_image_address = {"./home/2105-011-lfr/Downloads/IMG_20200514_184503.jpg"}
            link_to_rough_location = {"https://goo.gl/maps/Cqst7PEZmNxVsR5a6"}
            description = {"The closest beach to my house, has been a family favourite for years and nothing beats a bbq on it after a day of surfing."}
            />
            <Page
            title = {""}
            placename = {""}
            countryname = {""}
            mainimage   = {""}
            main_image_address = {""}
            link_to_rough_location = {""}
            description = {""}
            />
            <Page
            title = {""}
            placename = {""}
            countryname = {""}
            mainimage   = {""}
            main_image_address = {""}
            link_to_rough_location = {""}
            description = {""}
            />
    </main>
    )
}

export default PageContent