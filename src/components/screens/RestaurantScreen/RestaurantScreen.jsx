import React, { useState, useEffect } from 'react'
import './RestaurantScreen.css'
import MenuFilteringCard from '../../widgets/MenuFilteringCard/MenuFilteringCard'
import ImageCard from '../../widgets/ImageCard/ImageCard'
import { supabase } from '../../../config/SupabaseClient'
import { useParams } from 'react-router-dom';

function RestaurantScreen() {
    let { resturent_id } = useParams();
    const [foods, setFoods] = useState([]);
    const [restaurant, setRestaurant] = useState()
    console.log('====================================');
    console.log(foods);
    console.log('====================================');
    useEffect(() => {
        getFoods();
        getHotel();
    }, []);

    async function getFoods() {
        const { data } = await supabase.from("restaurant_food_link")
            .select('food(*)')
            .eq('restaurant', resturent_id)
        setFoods(data);
    }

    async function getHotel() {
        const { data } = await supabase.from("restaurant")
            .select('*')
            .eq('id', resturent_id)
        setRestaurant(data[0])
    }

    return (
        <div className='restaurant'>
            <nav className='resturant--headding-container'>
                <h1 className='restaurant--headding'>{restaurant.title}</h1>
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
                            key={food.food.id}
                            name={food.food.title}
                            rating={food.food.rating}
                            price={food.food.price}
                        />))}

            </div>
            <h2 className='restaurant--sub-headding'>Menu</h2>
            {foods.map(
                (food) => (
                    <ImageCard
                        key={food.food.id}
                        name={food.food.title}
                        rating={food.food.rating}
                        price={food.food.price}
                        size='lg'
                    />))}
        </div>
    )
}

export default RestaurantScreen