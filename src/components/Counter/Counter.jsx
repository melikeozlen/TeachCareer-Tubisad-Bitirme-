import React, { useState } from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import './Counter.scss'
const Counter = () => {

    return (
        <div class="counter">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">

                        <div id="counter">
                            <div class="cell">
                                <div class="counter-value number-count" data-count="231">50</div>
                                <p class="counter-info">Happy Users</p>
                            </div>
                            <div class="cell">
                                <div class="counter-value number-count" data-count="85">20</div>
                                <p class="counter-info">Issues Solved</p>
                            </div>
                            <div class="cell">
                                <div class="counter-value number-count" data-count="59">15</div>
                                <p class="counter-info">Good Reviews</p>
                            </div>
                            <div class="cell">
                                <div class="counter-value number-count" data-count="127">56</div>
                                <p class="counter-info">Case Studies</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           
        </div>

    )
}

export default Counter