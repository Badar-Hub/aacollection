<template>
  <div>
    <Slider id="home">
      <q-carousel-slide
        :name="1"
        :style="
          `background-image: url(${require(`@/assets/images/Header/header1.jpg`)})`
        "
      />
    </Slider>
    <InfoContainer id="about">
      <div id="slide" class="col col-xs-12 col-sm-6">
        <h5 class="q-my-md info-semi-bold">
          About
        </h5>
        <h6 class="q-my-sm basic-info-font">
          Hello! I am Badar Abdullah. Software & Web Developer. I'm an
          achievement-oriented person with solid background of overseeing system
          architecture, defining goals and managing project progress with both
          local and remote teams. Organized and systematic team player with
          development experience in Agile development environments and Scrum
          methodology. Learn More
        </h6>
      </div>
      <div id="slide" class="col col-xs-12 col-sm-6">
        <h5 class="q-my-md info-semi-bold">Basic Information</h5>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              Age:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">22</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              EMAIL:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">bapk65@gmail.com</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              Phone:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">+92 332 1021700</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              Address:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">
              Bahria Town Phase 7, Rawalpindi
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              Languages:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">
              English, Urdu, Arabic
            </p>
          </div>
        </div>
      </div>
    </InfoContainer>
    <h5 id="skills" class="text-center info-semi-bold">Skills</h5>
    <InfoContainer>
      <div class="col col-xs-4">
        <div class="q-px-sm">
          <li>
            VueJS
          </li>
          <li>CSS, SCSS</li>
          <li>
            Azure Devops
          </li>
        </div>
      </div>
      <div class="col col-xs-4">
        <div class="q-px-sm">
          <li>
            HTML
          </li>
          <li>Javascript</li>
          <li>
            Node
          </li>
        </div>
      </div>
      <div class="col col-xs-4">
        <div class="q-px-sm">
          <li>
            Express
          </li>
          <li>
            Rest API
          </li>
          <li>
            ASP.NET
          </li>
        </div>
      </div>
    </InfoContainer>
    <h5 id="experience" class="text-center info-semi-bold">Experience</h5>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2021-05 - Current
            <br />
            <strong>
              Full Stack Developer
              <br />
              Tech Origin
            </strong>
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <li>
          Working with various clients on Vue and Node Projects, using libraries
          such as Vuex, Vue-Router, Quasar etc
        </li>
        <li>
          Migrating VueJs 2 code bases to VueJs 3, and using best practices and
          techniques
        </li>
        <li>
          Working on Nodejs with ExpressJs. Developing Restful & GraphQl APIs
        </li>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2020-11 - 2021-05
            <br />
            <strong>
              Senior Vuejs Developer
              <br />
              IPlex
            </strong>
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <li>
          Working on the Restaurant admin platform, implementing the latest
          technologies i.e Vue 3, DI and best practices coming
        </li>
        <li>
          From the SOLID principles, also working with integrating & upgrading
          the current microservices based
        </li>
        <li>
          Application, helping the community while solving bugs to improve the
          overall quality and efficiency of the
        </li>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2020-10 - Current
            <br />
            <strong>
              Full Stack Developer
              <br />
              Curaprox
            </strong>
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <p>
          As part of this experience, I'd the opportunity to dip my toes in the
          world of big eCommerce by designing, developing, architecting
          solutions for an admin portal in NodeJs and the storefront in VueJs.
          Among many other takeaways, I managed to gain the first-hand
          experience with the complex domain that is modern eCommerce and
          deploying an application all while tackling all sorts of challenges.
        </p>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2018 - 2020
            <br />
            <strong>
              Wordpress Developer
              <br />
              Bilal Enterprises
            </strong>
          </h6>
        </div>
      </div>
      <div class="col col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <li>
          Provided timely resolution to reported website problems by integrating
          new solutions into existing platforms.
        </li>
        <li>
          Installed required plugins and additional coding to fit final design
          and functionality requirements.
        </li>
        <li>
          Responded to and corrected issues preventing business or customer use
          of site or features.
        </li>
        <li>
          Collaborated with design and project developers to understand project
          scope and offer elegant, creative and scalable solutions.
        </li>
        <li>
          Delivered quality commercial websites that met coding standards and
          cross-browser compatibilities.
        </li>
        <li>
          Designed interfaces and graphics for presentations and
          mobile-delivered applications to enhance content.
        </li>
        <li>
          Converted design assets into component-based HTML, CSS and JavaScript.
        </li>
      </div>
    </InfoContainer>

    <h5 id="portfolio" class="text-center info-semi-bold">Portfolio</h5>

    <div class="row max-width-center">
      <HoverImage
        img1="01.png"
        txt1="Curaprox"
        link1="http://www.curaprox.cf"
        img2="02.png"
        txt2="Buruj"
        link2="http://www.buruj.pk"
        img3="03.png"
        txt3="Wet N Wild"
        link3="https://wetnwild.netlify.app/"
      />
    </div>
    <div class="row max-width-center">
      <HoverImage
        img1="04.png"
        txt1="LA Girls"
        link1="https://lagirlpakistan.com/"
        img2="05.png"
        txt2="AA Collection"
        link2="https://aa-collection.netlify.app/"
        img3="06.png"
        txt3="Bilal Enterprises"
        link3="https://www.bilalenterprises.pk/"
      />
    </div>
    <h5 class="text-center info-semi-bold">Education</h5>

    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2016 - 2018
            <br />
            Intermediate
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Intermediate</h5>
        <strong
          ><p>Pakistan International School, Jeddah, Saudia Arabia</p></strong
        >
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2014 -2016
            <br />
            Matric
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Matric</h5>
        <strong
          ><p>Pakistan International School, Jeddah, Saudia Arabia</p></strong
        >
      </div>
    </InfoContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Slider from "../components/general/Slider.vue";
import HoverImage from "../components/general/HoverImage.vue";
import InfoContainer from "../components/general/InfoContainer.vue";

export default defineComponent({
  components: {
    Slider,
    HoverImage,
    InfoContainer,
  },
});
</script>

<style scopped>
li {
  font-size: 14px;
}
.basic-info-font {
  font-size: 14px !important;
}
.categories-img {
  max-width: 395px;
  height: 300px;
  width: 100%;
}
.category-header-image {
  max-width: 1200px;
  width: 100%;
}
</style>
