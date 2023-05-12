import axios from "axios"

export default function Multi(props) {
    let {
        data,slug
    } = props
    return (
      <main>
        <div>
            <h1>Dyanamic</h1>
          <p>multi Dyanamic2</p>
          <pre>
            {
                // if(
                //     typeof(data) !== 'undefined' &&
                //      typeof(data) === "object" && 
                //      Object.keys(data).length>0){
                // Object.entries(data)
                // .map(
                //     ([key.value])=>{
                //         return <div>
                //             <span>{key}</span>
                //             <span> - </span>
                //             <span>{value}</span>
                //         </div>
                //     }
                // )
            }
          </pre>
        </div>
      </main>
    )
  }
  

export async function getStaticPaths(){
    let paths = []
    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        paths=response.data
    })

    if(Array.isArray(paths) && paths.length > 0){
        paths = paths.map((item)=>({
            params : {id:`${item?.id}`}
        }))
    }

    return {
        paths: paths ?? [],
        fallback:false
    }
}

export async function getStaticProps(){
    let {slug} = context.params.slug;
    let data = null;
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    .then((response)=>{
        if(typeof(response?.data) !== 'undefined' && typeof(response.data) === "object" && Object.keys(response?.data).length>0){
            kdata = response?.data
        }
    })
    return {
        props:{
            data,
            slug
        }
    }
}