import React from 'react'
import stop from '../assets/book and tittle3 1.jpg'
import kid from '../assets/book and tittle4 1.jpg'
import tongue from '../assets/book and tittle6 1.jpg'
import bibliograph from '../assets/thought-catalog-o0Qqw21-0NI-unsplash 1.jpg'
import './Categories.css'

function Category() {
  return (
    <>
    <div className='category-heading' id='categories'><h2>Category</h2></div>
    <div className='bookcategories'>
      <div className='image-book-category-1'>
        <div><img src={stop} alt="" /></div>
        <div className='title-book-category-1'>
          <h3>Non-Fiction</h3>
        </div>
      </div>
      <div className='image-book-category-2'>
      <div><img src={kid} alt="" /></div>
      <div className='title-book-category-2'>
          <h3>Fiction</h3>
        </div>
      </div>
      <div className='image-book-category-3'>
      <div><img src={bibliograph} alt="" /></div>
      <div className='title-book-category-3'>
          <h3>Bibliograph</h3>
        </div>
      </div>
      <div className='image-book-category-4'>
      <div className='image-book-category-4'><img src={tongue} alt="" /></div>
      <div className='title-book-category-4'>
          <h3>Academics</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default Category