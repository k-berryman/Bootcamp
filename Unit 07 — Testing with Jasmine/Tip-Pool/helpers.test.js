describe("Helpers test (with setup and tear-down)", function() {
  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create table row element and pass to appendTd function with input value on updateServerTable()', function () {
    ///
  });

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
  });
});
