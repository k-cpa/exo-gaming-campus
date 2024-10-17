/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'bgHero': 'url("../images/pexels-a-darmel-7862508.jpg")',
      },
      fontSize: {
        'xxs': '0.60rem',
        'hero': '0.95rem'
      },
      letterSpacing: {
        'widest': '5px',
      },
      colors: {
        'textHero' :'rgb(186, 186, 186)',
        'newsNav': '#83318B',
        'bgNews': 'rgb(199, 199, 199)',
      },
      boxShadow: {
        'imgShadow': '0px 8px 15px 2px rgba(0,0,0,0.7)'
      },
      button: {
        'primary': {
          '@apply py-2 px-8 border text-white hover:bg-white hover:text-black transition duration-300': {},
        },
        'secondary': {
          '@apply py-4 px-12 border border-black text-black font-semibold hover:bg-black hover:text-white transition duration-300': {}
        }
      },

      // tentative de gestion du responsive pour mes containers. Conflit avec le responsive du reste. Voir plus tard comment faire pour avoir ce type de systeme fonctionnel
    //  responsive: {
    //     'bp-1720': {
    //       '@apply bp-1720:w-[1520px]':{},
    //     },
    //     'bp-1520': {
    //       '@apply bp-1520:w-[1320px]':{},
    //     },
    //     'bp-1320': {
    //       '@apply bp-1320:w-[1120px]':{},
    //     },
    //     'bp-1120': {
    //       '@apply bp-20:w-[820px]':{},
    //     },
    //     'bp-920': {
    //       '@apply bp-820:w-[820px]':{},
    //     }, 
    //     'bp-820': {
    //       '@apply bp-820:w-[720px]':{},
    //     },
    //     'bp-720': {
    //       '@apply bp-720:w-[620px]':{},
    //     },
    //     'bp-620': {
    //       '@apply bp-620:w-[520px]':{},
    //     },
    //   }
    },
    screens: {
      'bp-1720': {'max': '1720px'},
      'bp-1520': {'max': '1520px'},
      'bp-1420': {'max': '1420px'},
      'bp-1320': {'max': '1320px'},
      'bp-1120': {'max': '1120px'},
      'bp-920':  {'max': '920px'},
      'bp-820':  {'max': '820px'},
      'bp-720':  {'max': '720px'},
    },
  },
  plugins: [],
}

