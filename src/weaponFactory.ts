import Weapon from './Weapon';
import sprites from './sprites';
import sounds from './sounds';
import weaponData from './weapons';
import { Game } from './interfaces';
import { Sounds, WeaponOptions } from './types';

/** Compiles a list of weapon objects */
export const weaponFactory = (game: Game, loadedSounds: Sounds) => {
  const weaponsList = [] as Weapon[];

  for (const name of Object.keys(weaponData)) {
    const n = name as keyof typeof weaponData;
    weaponsList.push(
      new Weapon(
        game,
        loadedSounds[n]?.length > 0 ? loadedSounds[n] : sounds[n],
        sprites[n],
        weaponData[n] as unknown as WeaponOptions
      )
    );
  }
  return weaponsList;
};

export default weaponFactory;
