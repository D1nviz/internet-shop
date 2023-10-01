import React from 'react'

type SingleProductPageProps = {
  params: {categoryid: string}
}
export default function SingleCategoryPage({params}: SingleProductPageProps) {
  console.log(params)
  return (
    <div> hello{params.categoryid}</div>
  )
}
