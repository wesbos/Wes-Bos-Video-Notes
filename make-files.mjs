import ARG from '../../Sites/bosmonster-v1/data/videos-ARG.js';
import BJS from '../../Sites/bosmonster-v1/data/videos-BJS.js';
import CLPU from '../../Sites/bosmonster-v1/data/videos-CLPU.js';
import ES6 from '../../Sites/bosmonster-v1/data/videos-ES6.js';
import GAT from '../../Sites/bosmonster-v1/data/videos-GAT.js';
import GRID from '../../Sites/bosmonster-v1/data/videos-GRID.js';
import JS3 from '../../Sites/bosmonster-v1/data/videos-JS3.js';
import MMD from '../../Sites/bosmonster-v1/data/videos-MMD.js';
import NODE from '../../Sites/bosmonster-v1/data/videos-NODE.js';
import RDX from '../../Sites/bosmonster-v1/data/videos-RDX.js';
import RFB from '../../Sites/bosmonster-v1/data/videos-RFB.js';
import STPU from '../../Sites/bosmonster-v1/data/videos-STPU.js';
import WTF from '../../Sites/bosmonster-v1/data/videos-WTF.js';
import fs from 'fs';

const courses = { ARG, BJS, CLPU, ES6, GAT, GRID, JS3, MMD, NODE, RDX, RFB, RFB, STPU, WTF };


for(const [course, { videos }] of Object.entries(courses)) {
  console.log(course)
  // loop over each video and create a folder and file for i
  for(const [i, video] of Object.entries(videos)) {
    // create folder
    fs.mkdirSync(`./${course}`, {recursive: true});
    // create file
    fs.writeFileSync(`./${course}/${video.num} - ${video.title} - ${video.id}.md`, `# ${video.title}`);
  }

}
