interface PagesProps {
    title : string
    placename : string
    countryname : string
    mainimage   : string
    link_to_rough_location : string
    description : string
}

function Page(props: PagesProps): JSX.Element {
    return(
        <img src='#' alt ={props.mainimage} />
    )
}

export default Page