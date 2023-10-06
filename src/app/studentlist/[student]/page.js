"use client"
export default function Student({ params }) {
    console.log(params, "paramssss")
    return (
        <div>
            <h1>student Details</h1>
            <h3>Name: {params.student}</h3>
        </div>
    )
}