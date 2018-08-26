<template>
  <div app>
    <div class="ProfileCanopy ProfileCanopy--withNav ProfileCanopy--large">
      <div class="ProfileCanopy-inner">
        <div class="ProfileCanopy-header u-bgUserColor">
          <div class="ProfileCanopy-headerBg">
            <img alt="loggedUser.first_name" :src="image" style="transform: translate3d(0px, 21.6094px, 0px);">
          </div>
              <div class="AppContainer">
                <div class="ProfileCanopy-avatar">
                  <div class="ProfileAvatar">
                    <img class="ProfileAvatar-image" :src="picture" alt="loggedUser.first_name">
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
	import Vuex from 'vuex'
  import AppApi from '~apijs'

  export default {
    props: {
      picture: {
        type: String,
        default: "https://www.chillplanet.nl/wp-content/uploads/2018/04/no-profile-chillplanet.jpg"
      },
      image: {
        type: String,
        default: "https://cdn.vuetifyjs.com/images/parallax/material"
      }
    },
    methods: {
    }
  }
</script>
<style>
  /* .ProfileCanopy-header .AppContainer {
    height: 100%;
    position: relative;
  }
  .ProfileCanopy-avatar {
    bottom: -105px;
    left: -90px;
    position: absolute;
    transition: bottom .3s;
    z-index: 3;
  }
  @media screen and (min-width: 1236px)
  .AppContainer {
      max-width: 1190px;
  }

  .AppContainer {
      margin: 0 auto;
      max-width: 890px;
  }
  .ProfileAvatar {
    background: #fff;
    border: 5px solid #fff;
    border-radius: 50%;
    height: 200px;
    position: relative;
    width: 200px;
  }
  .ProfileAvatar-image, .ProfileAvatar-placeholderImage {
    -moz-force-broken-image-icon: 1;
    border-radius: 50%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

@media (min-width: 1200px)
.ProfileCanopy--large, .ProfileCanopy--large .ProfileCanopy-header {
    height: 280px;
}
@media (min-width: 1100px)
.ProfileCanopy--large, .ProfileCanopy--large .ProfileCanopy-header {
    height: 280px;
}
.ProfileCanopy--large, .ProfileCanopy--large .ProfileCanopy-header {
    height: 250px;
    margin: auto;
}
.ProfileCanopy--withNav {
    padding-bottom: 60px;
}
.ProfileCanopy, .ProfileCanopy-header {
    height: 250px;
    margin-top: 10px;
    transition: height .3s;
}
.ProfileCanopy {
    position: relative;
}
.ProfileCanopy-inner {
    position: relative;
    width: 100%;
    z-index: 1;
}
.u-bgUserColor, .u-bgUserColorHover:hover, .u-bgUserColorHover:focus {
    background-color: #B40B44 !important;
}
.ProfileCanopy-header {
    max-width: 2560px;
    position: relative;
    z-index: 3;
    background-color: #1da1f2;
}
.ProfileCanopy-headerBg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
.ProfileCanopy-headerBg img {
    position: absolute;
    left: 0;
    right: 0;
    top: -9999px;
    bottom: -9999px;
    margin: auto 0;
    width: 100%;
} */
</style>