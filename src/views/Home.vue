<template>
  <div class="home">
    <div class="row">
      <div class="col s12 m3">
        <div class="card medium">
          <div class="card-image">
            <img src="https://ksassets.timeincuk.net/wp/uploads/sites/54/2006/02/2440-1105-1-320x228.jpg" />
            <span class="card-title">Share</span>
          </div>
          <div class="card-content">
            <p>
              Valefor is a platform intended for artists and music listeners who own mp3 files that want to share their
              music with the world.
            </p>
          </div>
        </div>
      </div>
      <div class="col s12 m3">
        <div class="card medium">
          <div class="card-image">
            <img
              src="https://segd.org/sites/default/files/styles/galleryformatter_slide/public/HIPLA_HyundaiCard_MusicLibrary%2BUnderstage_33_MusicLibrary_150525.jpg?itok=xclwspvv"
              style="height: 141px"
            />
            <span class="card-title">Build</span>
          </div>
          <div class="card-content">
            <p>
              The goal of Valefor is to build a collective music library and archive in order to preserve digital music
              that will inevitably get lost to time.
            </p>
          </div>
        </div>
      </div>
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
    </div>
  </div>

  <!-- <div class="circle circle1"></div> -->
</template>

<style>
.card .card-content {
  padding-bottom: 400px;
}
.row {
  margin-top: 50px;
  margin-left: 400px;
}
.button {
  position: absolute;
  /*padding-top: 70%;*/
  margin-bottom: 70%;
  top: 65%;
  left: 40%;
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
  right: 1050px;
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
  right: 30px;
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
      message: "STEAL THIS APP"
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
