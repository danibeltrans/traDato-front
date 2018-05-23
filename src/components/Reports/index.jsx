import React from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';

// material-ui icons
import Assignment from '@material-ui/icons/Assignment';

// core components
import GridContainer from 'components/Grid/GridContainer';
import ItemGrid from 'components/Grid/ItemGrid';
import IconCard from 'components/Cards/IconCard';
import Table from 'components/Table/Table';

const style = {
  customCardContentClass: {
    paddingLeft: '0',
    paddingRight: '0',
  },
};

const Reports = () => (
  <GridContainer>
    <ItemGrid xs={12}>
      <IconCard
        icon={Assignment}
        iconColor="rose"
        title="Report"
        content={
          <Table
            tableHeaderColor="primary"
            tableHead={[
              'search',
              'id',
              'name',
              'date',
              'issue',
              'error',
            ]}
            tableData={[
              ['1', '1', 'John Brown', '10/10/2017', true, false],
              ['2', '2', 'Jim Green', '12/10/2017', true, false],
              ['3', '3', 'Joe Black', '13/10/2017', false, false],
            ]}
            coloredColls={[3]}
            colorsColls={['primary']}
          />
        }
      />
    </ItemGrid>
  </GridContainer>
);

export default withStyles(style)(Reports);
