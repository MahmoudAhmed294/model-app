import React from 'react';
import MyAccordion from '~/components/ui/MyAccordion';
import TitleValue from '~/components/ui/TitleValue';
import {IProductDetails} from '~/model';

const ImageInfo = (props: IProductDetails) => {
  const {category, code, cost, description, type} = props;
  return (
    <MyAccordion title="Image Info">
      <TitleValue title="Model" value={code} />
      <TitleValue title="Model Name" value={code} />
      <TitleValue title="Model Type" value={type} />
      <TitleValue title="Cost" value={cost} />
      <TitleValue title="Category" value={category} />
      <TitleValue title="Additional Description" value={description} />
    </MyAccordion>
  );
};

export default ImageInfo;
