const { ProjectsClient } = require('@google-cloud/resource-manager').v3;

const resourcemanagerClient = new ProjectsClient();

const project = { projectId: 'created-by-node-project-1' };

const callCreateProject = async () => {
  // Construct request
  const request = {
    project,
  };

  // Run request
  const [operation] = await resourcemanagerClient.createProject(request);
  const [response] = await operation.promise();
  console.log(response);
  return response;
};

module.exports = {
  callCreateProject,
};
