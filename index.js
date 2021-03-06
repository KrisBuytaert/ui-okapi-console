import React from 'react';
import Match from 'react-router/Match';
import ConsoleMenu from './ConsoleMenu';
import TenantList from './tenants/TenantList';
import TenantAdd from './tenants/TenantAdd';
import TenantEdit from './tenants/TenantEdit';
import ModuleList from './modules/ModuleList';
import ModuleAdd from './modules/ModuleAdd';
import ModuleEdit from './modules/ModuleEdit';
import Health from './health/Health';
import HealthConnected from './health/HealthConnected';


const Users = ({ pathname }) => <div>
  <ConsoleMenu />
  <hr />
  <Match exactly pattern={`${pathname}/tenants`} component={TenantList} />
  <Match pattern={`${pathname}/tenants/edit/:tenantid`} component={TenantEdit} />
  <Match pattern={`${pathname}/tenants/add`} component={TenantAdd} />
  <Match exactly pattern={`${pathname}/modules`} component={ModuleList} />
  <Match pattern={`${pathname}/modules/edit/:moduleid`} component={ModuleEdit} />
  <Match pattern={`${pathname}/modules/add`} component={ModuleAdd} />
  <Match exactly pattern={`${pathname}/health/health`} component={Health} />
  <Match exactly pattern={`${pathname}/health/healthconnected`} component={HealthConnected} />
</div>;

Users.propTypes = {
  pathname: React.PropTypes.string.isRequired,
};

export default Users;
