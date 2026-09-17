import antes from './antes.png';
import depois from './depois.png';
import coachVideoThumb from './coach_video_thumb.jpg';
import heroCardClasses from './hero_card_classes.jpg';
import heroCardJoinus from './hero_card_joinus.jpg';
import heroCardTimetable from './hero_card_timetable.jpg';
import introWebBackground from './introWebBackground.jpg';
import introWebBackground2 from './introWebBackground2.jpg';
import leticeHero from './letice_hero.png';
import painPointCompulsion from './pain_point_compulsion.jpg';
import painPointCore from './pain_point_core.jpg';
import painPointHormonal from './pain_point_hormonal.jpg';
import painPointMenopause from './pain_point_menopause.jpg';
import prod2 from './prod2.jpg';
import produto1 from './produto1.png';
import silhueta from './silhueta.webp';
import telaPulsanteAntesCroll from './telaPulsanteAntesCroll.jpg';

export {
  antes,
  depois,
  coachVideoThumb,
  heroCardClasses,
  heroCardJoinus,
  heroCardTimetable,
  introWebBackground,
  introWebBackground2,
  leticeHero,
  painPointCompulsion,
  painPointCore,
  painPointHormonal,
  painPointMenopause,
  prod2,
  produto1,
  silhueta,
  telaPulsanteAntesCroll,
};

export const images = {
  antes,
  depois,
  coachVideoThumb,
  heroCardClasses,
  heroCardJoinus,
  heroCardTimetable,
  introWebBackground,
  introWebBackground2,
  leticeHero,
  painPointCompulsion,
  painPointCore,
  painPointHormonal,
  painPointMenopause,
  prod2,
  produto1,
  silhueta,
  telaPulsanteAntesCroll,
};

export const imageMap = {
  '/src/assets/antes.png': antes,
  '/src/assets/depois.png': depois,
  '/src/assets/coach_video_thumb.jpg': coachVideoThumb,
  '/src/assets/hero_card_classes.jpg': heroCardClasses,
  '/src/assets/hero_card_joinus.jpg': heroCardJoinus,
  '/src/assets/hero_card_timetable.jpg': heroCardTimetable,
  '/src/assets/introWebBackground.jpg': introWebBackground,
  '/src/assets/introWebBackground2.jpg': introWebBackground2,
  '/src/assets/letice_hero.png': leticeHero,
  '/src/assets/pain_point_compulsion.jpg': painPointCompulsion,
  '/src/assets/pain_point_core.jpg': painPointCore,
  '/src/assets/pain_point_hormonal.jpg': painPointHormonal,
  '/src/assets/pain_point_menopause.jpg': painPointMenopause,
  '/src/assets/prod2.jpg': prod2,
  '/src/assets/produto1.png': produto1,
  '/src/assets/silhueta.webp': silhueta,
  '/src/assets/telaPulsanteAntesCroll.jpg': telaPulsanteAntesCroll,

  // Aliases sem a barra inicial
  'src/assets/antes.png': antes,
  'src/assets/depois.png': depois,
  'src/assets/coach_video_thumb.jpg': coachVideoThumb,
  'src/assets/hero_card_classes.jpg': heroCardClasses,
  'src/assets/hero_card_joinus.jpg': heroCardJoinus,
  'src/assets/hero_card_timetable.jpg': heroCardTimetable,
  'src/assets/introWebBackground.jpg': introWebBackground,
  'src/assets/introWebBackground2.jpg': introWebBackground2,
  'src/assets/letice_hero.png': leticeHero,
  'src/assets/pain_point_compulsion.jpg': painPointCompulsion,
  'src/assets/pain_point_core.jpg': painPointCore,
  'src/assets/pain_point_hormonal.jpg': painPointHormonal,
  'src/assets/pain_point_menopause.jpg': painPointMenopause,
  'src/assets/prod2.jpg': prod2,
  'src/assets/produto1.png': produto1,
  'src/assets/silhueta.webp': silhueta,
  'src/assets/telaPulsanteAntesCroll.jpg': telaPulsanteAntesCroll,
};

export function getImage(path) {
  return imageMap[path] || path;
}

export default images;
