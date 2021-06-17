
interface SourceProps{
    sourceUrl : string
    sourceName : string
}

function SourceURL(props: SourceProps) : JSX.Element{
    return (
        <div className='footersources'>
            {props.sourceName}: {props.sourceUrl}
        </div>
    )
}

export default SourceURL