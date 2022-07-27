import Weapon from './Weapon';
import sprites from './sprites';
import sounds from './sounds';
import weaponData from './weapons';
import { Game } from './interfaces';
import { WeaponOptions } from './types';

/** Compiles a list of weapon objects */
export const weaponFactory = (game: Game) => {
  const weaponsList = [] as Weapon[];

  for (const name of Object.keys(weaponData)) {
    const n = name as keyof typeof weaponData;
    weaponsList.push(new Weapon(game, sounds[n], sprites[n], weaponData[n] as unknown as WeaponOptions));
  }
  return weaponsList;
};

export default weaponFactory;
