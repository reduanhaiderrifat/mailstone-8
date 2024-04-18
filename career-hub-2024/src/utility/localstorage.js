const getStored = () => {
  const getStoredapllication = localStorage.getItem("job-application");
  if (getStoredapllication) {
    return JSON.parse(getStoredapllication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedApplication = getStored();
  const isExit = storedApplication.find((jobId) => jobId === id);
  if (!isExit) {
    storedApplication.push(id);
    localStorage.setItem("job-application", JSON.stringify(storedApplication));
  }
};

export { saveJobApplication, getStored };
