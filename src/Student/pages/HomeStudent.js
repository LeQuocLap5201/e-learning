import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const options = {
  type: "loop",
  perPage: 2,
  perMove: 1,
  pagination: false,
};

export default function HomeStudent() {
  return (
    <div>
      <Splide options={options} aria-label="React Splide Example 1">
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1586766193036-6d93c6c6c703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1617678151201-2596079f0b30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1602136773736-34d445b989cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
