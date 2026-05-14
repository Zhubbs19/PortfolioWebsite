import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';

function ModelingDiorama() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Modeling Diorama">
        <h1 className="base-header">Modeling Diorama</h1>

        <Container maxWidth="xl" className="about-content">
          {/* Video and Description Row */}
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={8}>
              <div className="media-item">
                {/* TODO: Replace with project video or screenshot */}
                <iframe
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/33XtXKlbD4c"
                  title="Modeling Diorama Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </Grid>

            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <p>
                  This work was completed as part of ITGM 505 - Game Art Methods course in Fall 2024, using Maya 2024, Adobe Substance
                  Painter, Adobe Substance Designer, and Adobe Photoshop for modeling and texturing. When completed, it was exported as
                  a final environment in Unreal Engine 5. The project was focused on creating a modular diorama using the modeling and
                  texturing skills gained through the quarter.
                </p>
              </div>
            </Grid>
          </Grid>

          {/* Model and UV Layouts */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h3 className="subheader">Model and UV Layouts</h3>
              <div className='info-item'>
                <p>
                  Below are the models and completed UV layouts for all modular components of the home, as well as a modeled export
                  of the full home into Unreal Engine 5.
                </p>
              </div>
            </Grid>
          </Grid>

          {/* Texturing */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h3 className="subheader">Texturing</h3>
              <div className='info-item'>
                <p>
                  After completing UVs, texturing of the model was completed using Adobe Photoshop, Adobe Substance Painter,
                  and Adobe Substance Designer.
                </p>
              </div>
            </Grid>
          </Grid>

          {/* Final Unreal Environment */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h3 className="subheader">Final Unreal Environment</h3>
              <div className='info-item'>
                <p>
                  The final Unreal Environment included the completed exported house model in a hilly environment with created tree
                  models, and leaves and grass textures.
                </p>
              </div>
            </Grid>
          </Grid>

          {/* Credits and Attributions */}
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Credits and Attributions</h3>

              <div className="info-item">
                <h4 className="attribution-subheader">Source Images for Texturing</h4>
                <ul className="attribution-list">
                  <li><a href="https://as2.ftcdn.net/v2/jpg/02/23/50/63/1000_F_223506315_HtvohLG5PRGzs7X5lTKUwajHAlKtrYfz.jpg">Grey asphalt roofing shingles background texture by olga pink from Adobe Stock</a></li>
                  <li><a href="https://as1.ftcdn.net/v2/jpg/01/56/42/94/1000_F_156429480_mEyYMe2BcsKxDAgBPhLCZy5Sw689eAXH.jpg">Wooden wall. Wood orange background by Saichol from Adobe Stock</a></li>
                  <li><a href="https://as2.ftcdn.net/v2/jpg/03/51/03/53/1000_F_351035312_t3WXKABWH14a2G3tRwczeJqRhErzzkHi.jpg">Texture of natural dark brown wood veneer by delobol from Adobe Stock</a></li>
                  <li><a href="https://as2.ftcdn.net/v2/jpg/07/23/40/55/1000_F_723405528_fTJMJgxbVymlyNsL5ozzPefn5WlNZOxY.jpg">Siberian larch fluted wood terrace by Audris from Adobe Stock</a></li>
                  <li><a href="https://as2.ftcdn.net/v2/jpg/03/89/01/61/1000_F_389016141_WUFdTlFgqkUholpo4ZNz5QidvVg8SvTp.jpg">Exterior natural stone veneer wall by Bruce Peter Morin from Adobe Stock</a></li>
                  <li><a href="https://as2.ftcdn.net/v2/jpg/03/79/58/51/1000_F_379585138_B5fseexnGHaX7y6m9zsUqd9yND4C5Xh7.jpg">Black Corrugated metal background by torsakarin from Adobe Stock</a></li>
                  <li><a href="https://as2.ftcdn.net/v2/jpg/04/82/05/31/1000_F_482053140_TdwcY0VyGI5ugIWAPfe0mLc4tRNg8Dbs.jpg">Dark wood background by Roman's portfolio from Adobe Stock</a></li>
                  <li><a href="https://stock.adobe.com/search/images?k=mahogany%20wood%20texture">Mahogany wood texture from Adobe Stock</a></li>
                  <li><a href="https://stock.adobe.com/images/tree-branch-with-green-leaf-isolated-for-object-and-retouch-design/527582012">Tree branch with green leaf by jakkapan from Adobe Stock</a></li>
                  <li><a href="https://stock.adobe.com/images/close-up-of-maple-tree-trunk-in-park-at-summer/265280827">Close up of maple tree trunk by romantiche from Adobe Stock</a></li>
                  <li><a href="https://stock.adobe.com/images/natural-gray-granite-stone-texture-background/292731351">Natural gray granite stone texture by htpix from Adobe Stock</a></li>
                  <li><a href="https://stock.adobe.com/images/green-grass-isolated-for-object-design/527581604">Green grass isolated by jakkapan from Adobe Stock</a></li>
                  <li><a href="https://stock.adobe.com/images/bouquet-of-young-green-grass-isolated-on-white-or-transparent-background-natural-raster-clipart-of-a-meadow-plant/574013571">Bouquet of young green grass by ioanna_alexa from Adobe Stock</a></li>
                  <li>Heightmap for terrain created using World Machine software</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default ModelingDiorama;
