/* eslint-disable */
import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: 'project';

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Type — `string`
   *
   * What type of project is this? Can only be one of three values: "construction", "feasibility", or "method". Type them without the quotes.
   */
  type?: string;

  /**
   * Text — `localeText`
   *
   *
   */
  text?: LocaleText;

  /**
   * Additional Text — `localeText`
   *
   *
   */
  additionalText?: LocaleText;

  /**
   * Images — `array`
   *
   *
   */
  images?: Array<
    SanityKeyed<{
      _type: 'image';
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative text — `localeString`
       *
       *
       */
      alt?: LocaleString;
    }>
  >;
}

export type LocaleString = {
  _type: 'localeString';
  /**
   * English — `string`
   *
   *
   */
  en?: string;

  /**
   * Deutsch — `string`
   *
   *
   */
  de?: string;
};

export type LocaleText = {
  _type: 'localeText';
  /**
   * English — `text`
   *
   *
   */
  en?: string;

  /**
   * Deutsch — `text`
   *
   *
   */
  de?: string;
};

export type Documents = Project;
