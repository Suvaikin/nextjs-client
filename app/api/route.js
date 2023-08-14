import { NextResponse } from 'next/server'
 
export async function GET(req) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log(data); // this will be a string
  });
 
  return NextResponse.json({test:res})
}