

function DesciptionPage({data}){

    return (
        <div>
            <div>
                <h1>{data.title}</h1>
            </div>

            <div>
                <p>{data.from}</p>
            </div>

            <div>
                <p>{data.desciption}</p>
            </div>
        </div>
    )
}

export default DesciptionPage;