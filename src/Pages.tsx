interface PagesProps {
    title : string
    placename : string
    countryname : string
    mainimage   : string
    main_image_address : string
    link_to_rough_location : string
    description : string
}

function Page(props: PagesProps): JSX.Element {
    return(
        <main>
            <div className = 'image'>
                <img src = {props.main_image_address} alt ={props.mainimage}/>
            </div>
            <h1>{props.title}</h1>
            <h2>{props.placename},{props.countryname} <a href={props.link_to_rough_location}> (map link) </a></h2>
            <div className = 'description'>
                {props.description}
            </div>
        </main>
    )
}

export default Page