import RouterInfo from '../../containers/RouterInfo/routerinfo.container'
import AppWrapper from '../../components/AppWrapper/appwrapper.component'
import { injectGlobal, ThemeProvider } from 'styled-components'
import FontLight from '../../global/fonts/IBMPlexMono-Light.woff'
import FontBold from '../../global/fonts/IBMPlexMono-Bold.woff'
import ResizeLoader from '../ResizeLoader/resizeloader.component'
import { MediaProvider } from '../../shared/media'

injectGlobal`
  @font-face {
    font-family: 'PlexMono';
    src: url('${FontLight}') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'PlexMono';
    src: url('${FontBold}') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

const theme = {
	lightFont: `
		font-family: 'PlexMono';
		font-weight: 300;
	`,
	boldFont: `
		font-family: 'PlexMono';
		font-weight: 600;
	`
}

const Root = ({ children, staticContext, size }) => {
	return (
		<ThemeProvider theme={theme}>
			<MediaProvider size={size} loader={ResizeLoader}>
				<AppWrapper>
					{children()}
					<RouterInfo context={staticContext} />
				</AppWrapper>
			</MediaProvider>
		</ThemeProvider>
	)
}
export default Root
