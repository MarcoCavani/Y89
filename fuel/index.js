const userAction = async () => {
    const response = await fetch('//fuel-v2.cc.api.here.com/fuel/stations.json');
    const myJson = await response.json()