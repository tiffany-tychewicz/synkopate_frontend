<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <P>
      "The BPI’s real problem with file-sharing is the uncomfortable fact that free advertising threatens to let artists
      make it big without signing on the dotted line. This is why the BPI says absurd things like “copying is stealing”.
      Every child in primary school can tell the difference between looking over someone’s shoulder for answers and
      ripping the piece of paper out of their hands. The law is clear on the difference, too: “A person is guilty of
      theft, if he dishonestly appropriates property belonging to another with the intention of permanently depriving
      the other of it.” Sharing doesn’t deprive anyone of property, so it obviously isn’t theft. The Government is
      threatening to cut off or throttle the internet connections of whole families because one person in that family is
      accused of giving an artist free advertising, but there’s no proposed increase in the “mild slap on the wrist”
      penalty for buying counterfeit CDs. How does encouraging people to buy from counterfeiters help artists? Is this
      morally right, or is the Government just doing whatever the industry tells it?"
    </P>

    <p>~ Andrew Robinson, leader of the Pirate Party UK</p>
    <!-- <div class="circle circle1"></div> -->
    <div class="container">
      <div class="speaker-box-left flex-center">
        <div class="vent"></div>
        <div class="speaker small flex-center circle1">
          <div class="ring small flex-center">
            <div class="interior small"></div>
          </div>
        </div>
        <div class="speaker flex-center circle2">
          <div class="ring flex-center">
            <div class="interior"></div>
          </div>
        </div>
      </div>

      <div class="speaker-box-right flex-center">
        <div class="vent"></div>
        <div class="speaker small flex-center circle1">
          <div class="ring small flex-center">
            <div class="interior small"></div>
          </div>
        </div>
        <div class="speaker flex-center circle2">
          <div class="ring flex-center">
            <div class="interior"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="video-container">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/KMZ4kkSVrBw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="button">
        <a class="waves-effect waves-white btn-large pulse indigo accent-1" v-on:click="newTab">
          LEARN TO TORRENT
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.button {
  position: absolute;
  /*padding-top: 70%;*/
  margin-bottom: 70%;
  top: 65%;
  left: 40%;
}
.video {
  max-width: /*853px*/ 60%;
  max-height: /*480px*/ 60%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 100;
  left: 0;
  margin: auto;
}

* {
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100%;
  position: relative;
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid white;
  border-right: 3px solid blue;
  margin: 50px;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.speaker-box-left {
  position: absolute;
  flex-direction: column;
  margin-top: 75px;
  margin-left: 0.5%;
  margin-right: 5%;
  margin-bottom: 50px;
  width: 200px;
  padding: 0% 0 60px 0;
  border-radius: 10px;
  border: 5px solid #000;
  background-color: #2c2c2c;
}

.speaker-box-right {
  position: absolute;
  flex-direction: column;
  margin-top: 75px;
  margin-left: 84%;
  margin-bottom: 50px;
  width: 200px;
  padding: 0% 0 60px 0;
  border-radius: 10px;
  border: 5px solid #000;
  background-color: #2c2c2c;
}

.speaker {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #000;
  background-color: #b4b4b4;

  &.small {
    margin-bottom: 50px;
    width: 75px;
    height: 75px;
  }
}

.ring {
  width: 75px;
  height: 75px;
  background-color: #b4b4b4;
  border-radius: 50%;
  border: 5px solid #000;

  &.small {
    width: 50px;
    height: 50px;
  }
}

.interior {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #000;

  &.small {
    width: 18px;
    height: 18px;
  }
}

.vent {
  margin-bottom: 40px;
  width: 100px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #000;
  background-color: darken(#2c2c2c, 5%);
}

.circle1 {
  animation: tweeder 1s infinite ease;
}

.circle2 {
  animation: elastic 1s infinite ease;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes elastic {
  0% {
    transform: scale(1.1);
  }
  15% {
    transform: scale(1.7);
  }
  35% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1.5);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes tweeder {
  0% {
    transform: scale(1.1);
  }
  15% {
    transform: scale(1.15);
  }
  35% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(1.15);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>

<script>
export default {
  data: function() {
    return {
      message: "STEAL THIS APP."
    };
  },
  created: function() {},
  methods: {
    newTab: function() {
      window.open("https://www.wikihow.com/Download-Torrents");
    }
  }
};
</script>
