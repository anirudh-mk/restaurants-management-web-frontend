import React, { useState, useEffect } from 'react'
import './RestaurantScreen.css'
import MenuFilteringCard from '../../widgets/MenuFilteringCard/MenuFilteringCard'
import ImageCard from '../../widgets/ImageCard/ImageCard'
import { supabase } from '../../../config/SupabaseClient'

function RestaurantScreen() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        getFoods();
    }, []);

    async function getFoods() {
        const { data } = await supabase.from("foods").select();
        setFoods(data);
    }

    return (
        <div className='restaurant'>
            <nav className='resturant--headding-container'>
                <h1 className='restaurant--headding'>Resturent Name</h1>
                <input
                    type="search"
                    placeholder="Search...."
                    className='restaurant--search'
                />
            </nav>
            <div className='restaurant--horizontal-scroll'>
                <MenuFilteringCard
                    name="All"
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <MenuFilteringCard
                    name="All"
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <MenuFilteringCard
                    name="All"
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <MenuFilteringCard
                    name="All"
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <MenuFilteringCard
                    name="All"
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <MenuFilteringCard
                    name="All"
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className='restaurant--show-all'>
                    <p>Show</p>
                    <p>All</p>
                </div>
            </div>
            <h2 className='restaurant--sub-headding'>Popular</h2>
            <div className='restaurant--horizontal-scroll'>
                {foods.map(
                    (food) => (
                        <ImageCard
                            key={food.id}
                            name={food.title}
                            rating={food.rating}
                            price={food.price}
                        />))}

            </div>
            <h2 className='restaurant--sub-headding'>Menu</h2>
            {foods.map(
                (food) => (
                    <ImageCard
                        key={food.id}
                        name={food.title}
                        rating={food.rating}
                        price={food.price}
                        size='lg'
                    />))}
        </div>
    )
}

export default RestaurantScreen