<template>
  <div class="cs-modal">
    <div class="cs-modal__bg">
        <div class="cs-modal__padding">
            <div class="cs-modal__row cs-modal__row--1">
                <div class="cs-modal__col--6-6 cs-modal__close">
                    <img src="/arrow-back.svg"> <span>GO BACK</span>
                </div>
                <div class="cs-modal__col--6-6">
                    <div class="cs-modal__menu" :style="{background: '#00933b'}">
                        <div class="cs-modal__menu-options">
                            <img class="cs-modal__img--chevron" src="/widget/chevron--down.png">
                            <div
                                v-for="(item, key) in dataModel"
                                :key="item.retailer"
                                class="cs-modal__product-wrapper" :data-id="key"
                            >
                                <div class="cs-modal__product">
                                    {{item.prodName}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cs-modal__row cs-modal__row--2">
                <div class="cs-modal__col--6-6">
                    <img class="cs-modal__img--product">
                </div>
                <div class="cs-modal__col--6-6 cs-modal__col--2">
                    <div class="cs-modal__retailers">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import dataModel from "../js/model.js";
import gsap from "gsap";

const props = defineProps({
  brandExperience: {
    type: String,
    default: "1",
  },
});

let activeProduct = 1;

var populateRetailers = (active) => {

    //empty the parent element
    $('.cs-modal__retailers').html('');

    $('.cs-modal__img--product').attr('src', dataModel[activeProduct].prodImg)

    //move dropdown menu item to first position
    $(".cs-modal__product-wrapper[data-id="+activeProduct+"]").prependTo(".cs-modal__menu-options");

    Object.keys(dataModel[active].retailers).forEach(function(key, index) {
        $('.cs-modal__retailers').append(`
        <a class="cs-modal__a cs-modal__a--retailer" href="${dataModel[active].retailers[index+1].url}" target="_blank">
            <div class=\"cs-modal__retailer\">
                <div class="cs-modal__retailer-logo">
                    <img class=\"cs-modal__img--retailer-logo\" src=\"${dataModel[active].retailers[index+1].logo}\">
                </div>
                <div class="cs-modal__retailer-price">
                    £${dataModel[active].retailers[index+1].price}
                </div>
                <div class="cs-modal__retailer-cta">
                    <div style="background: #00933b; color: #ffffff;padding: 12px 0px 10px 0px;border-radius: 3px;font-weight: 700;width: 100%;">BUY NOW</div>
                </div>
            </div>
        </a>
        `)
    })
}

$(document).ready(function() {

    let chevronRotation = 0;

    $(document).on('click', '.cs-modal__menu', function() {
        
        chevronRotation += 180;

        if($(this).hasClass('expanded')) {

            $(this).toggleClass("expanded");

            gsap.to('.cs-modal__menu', {
                duration: .5,
                height: 50
            });
            gsap.to('.cs-modal__img--chevron', {
                duration: .25,
                rotate: chevronRotation
            });
            gsap.to('.cs-modal__retailers', {
                duration: .25,
                opacity: 1
            });

            $('.cs-modal__retailers').css({pointerEvents: 'all'})
            

            chevronRotation = 0;

        } else {

            $(this).toggleClass("expanded");

            gsap.to('.cs-modal__menu', {
                duration: .5,
                height: 50 * (Object.keys(dataModel).length),
                top: 0
            });

            gsap.to('.cs-modal__img--chevron', {
                duration: .25,
                rotate: chevronRotation
            });

            gsap.to('.cs-modal__retailers', {
                duration: .25,
                opacity: .2
            });
            $('.cs-modal__retailers').css({pointerEvents: 'none'})
            

            chevronRotation = -180;
        }

    });

    $(document).on('click', '.cs-modal__product-wrapper', function() {
        activeProduct = $(this).attr('data-id');
        populateRetailers(activeProduct);
    });

    $(document).on('click', '.carousel__button', function() {
        //show the modal
        $('.cs-modal').css({
            display: 'flex'
        });
        activeProduct = $(this).attr('data-id');
        populateRetailers(activeProduct);
    });
    $(document).on('click', '.cs-modal__close', function() {
        gsap.to('.cs-modal__bg', {
            opacity: 0,
            duration: .25,
            onComplete: () => {
                gsap.set('.cs-modal__bg', {
                    opacity: 1,
                    delay: .5
                })
            }
        })
        gsap.to('.cs-modal', {
            opacity: 0,
            delay: .25,
            duration: .5,
            onComplete: () => {
                gsap.set('.cs-modal', {
                    opacity: 1,
                    display: 'none'
                })
            }
        })
    });

    populateRetailers(activeProduct);

})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.cs-modal {
    @include flexbox();
    @include align-items(center);
    @include justify-content(center);
    background: #000000;
    display: none;
    height: 100%;
    left: 0px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1000;
}
.cs-modal__bg {
    background: #ffffff;
    border-radius: 20px;
    height: 500px;
    max-width: 668px;
    max-height: 500px;
    width: 100%;
    @media screen and(max-width: $width--xs) {
        height: 100%;
        max-height: none;
        border-radius: 0px;
    }
}
.cs-modal__padding {
    @include flexbox();
    @include align-items(center);
    @include justify-content(center);
    @include flex-direction(column);
    height: 100%;
    padding: 30px;
    width: 100%;
    @media screen and(max-width: $width--xs) {
        padding: 20px 20px 0px 20px;
    }
}
.cs-modal__row {
    @include flexbox();
    @include align-items(flex-start);
    @include justify-content(center);
    width: 100%;
    @media screen and(max-width: $width--xs) {
        @include flex-direction(column);
    }
}
.cs-modal__col--6-6 {
    position: relative;
    width: 50%;
    @media screen and(max-width: $width--xs) {
        width: 100%;
    }
}
.cs-modal__row--1 {
    @media screen and(max-width: $width--xs) {
        @include flex-direction(row-reverse);
    }
    & .cs-modal__col--6-6 {
        @include flexbox();
        @include align-items(center);
        @include justify-content(flex-start);
        @media screen and(max-width: $width--xs) {
            @include justify-content(center);
        }

        &:first-child {
            @media screen and(max-width: $width--xs) {
                width: 50px;
            }
        }

        &:last-child {
            height: 50px;
        }
        & img {
            display: block;
            margin-right: 10px;
            top: 18px;
            width: 50px;
        }
    }
}
.cs-modal__close {
    @media screen and(max-width: $width--xs) {
        margin-left: 10px;
    }
    & > span {
        @media screen and(max-width: $width--xs) {
            display: none;
        }
    }
    & > img {
        height: 50px;
        width: 50px;
        @media screen and(max-width: $width--xs) {
            margin-right: 0px !important;
        }
    }
    
}
.cs-modal__row--2 {
    height: calc(100% - 50px);

    & .cs-modal__col--6-6 {
        height: 100%;

        &:first-child {
            @include flexbox();
            @include align-items(center);
            @include justify-content(center);
            padding-right: 30px;
            @media screen and(max-width: $width--xs) {
                padding-right: 0px;
                padding-top: 30px;
                padding-bottom: 30px;
                height: auto;
            }
        }
        &:last-child {
            @media screen and(max-width: $width--xs) {
                overflow: scroll;
            }
        }
    }
    
}
.cs-modal__menu {
    @include flexbox();
    @include align-items(center);
    @include justify-content(flex-start);
    @include flex-direction(column);
    border-radius: 5px;
    height: 50px;
    position: absolute;
    overflow: hidden;
    width: 100%;
    z-index: 100;
    & .cs-modal__img--chevron {
        position: absolute;
        right: 0px;
        max-width: 20px;
        width: 20px;
    }
}
.cs-modal__menu-options {
    position: absolute;
    width: 100%;
}
.cs-modal__product-wrapper {
    @include flexbox();
    @include align-items(center);
    @include justify-content(center);
    font-size: 12px;
    height: 50px;
    min-height: 50px;
    padding-left: 15px;
    padding-right: 40px;
    text-align: left; 
}
.cs-modal__product {
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    line-height: 13px;
    text-align: left; 
    width: 100%;
}
.cs-modal__img--product {
    width: 80px;
    @media screen and(max-width: $width--xs) {
        width: 50px;
    }
}
.cs-modal__retailers {
    height: 100%;
    max-height: 100%;
    overflow: scroll;
    position: relative;

    &::after {
        content: '';
        height: 40px;
        left: 0px;
        position: absolute;
        width: 100%;
    }
}
.cs-modal__col--2 {
    position: relative;
    &::after {
        background: linear-gradient(180deg, rgba(255,255,255,0) 5%, rgba(255,255,255,1) 95%);
        bottom: 0px;
        content: '';
        height: 60px;
        left: 0px;
        pointer-events: none;
        position: absolute;
        width: 100%;
    }
}
.cs-modal__retailer {
    @include flexbox();
    @include align-items(center);
    @include justify-content(center);
    border-bottom: 1px solid #f0f0f0;
    height: 70px;
}
.cs-modal__retailer-logo {
    width: 70px;
}
.cs-modal__retailer-price {
    font-size: 13px;
    font-weight: 700;
    @include flex(1);
}
.cs-modal__retailer-cta {
    font-size: 10px;
    width: 80px;
}
.cs-modal__img--retailer-logo {
    display: block;
    width: 74px;
}
.cs-modal__a--retailer {
    color: #000000;
    text-decoration: none;
}
</style>