interface IProps {
  title?: string;
  description?: string;
  color?: string;
  spinnerBorder?: string;
  // type?: 'spinner'
}

const loadView = ({ title, description, color, spinnerBorder }: IProps): string => {
  return (`
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .loader {
      border: 6px solid ${spinnerBorder || "#f3f3f3"};
      border-radius: 50%;
      border-top: 6px solid ${color || "rgb(111, 107, 249)"};
      width: 30px;
      height: 30px;
      bottom: 5px;
      right: 5px;
      position: fixed;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 2s linear infinite;
    }

    .logo {
      color: ${color || "rgb(111, 107, 249)"};
      padding: 60px;
    }

    @font-face {
      font-family: 'Product Sans';
      font-style: normal;
      font-weight: 400;
      src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
    }

    * {
      font-family: 'Product Sans';
    }

    html, body {
      background: #fff;
    }
    /* Safari */
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    </style>
    </head>
    <body>
    <div class="logo">
          <h1>${title}</h1>
          <p>${description}</p>
    </div>
    <div class="loader"></div>
    </body>
    </html>
  `);
};

export default loadView;
