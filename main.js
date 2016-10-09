const electron = require('electron');
// ����Ӧ���������ڵ�ģ�顣
const {app} = electron;
// ����ԭ����������ڵ�ģ�顣
const {BrowserWindow} = electron;

// ����һ������ window �����ȫ�����ã�����㲻��������
// �� JavaScript �����������գ� window �ᱻ�Զ��عر�
let mainWindow;

function createWindow() {
  // ������������ڡ�
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // ����Ӧ�õ� index.html��
  mainWindow.loadURL(`file://${__dirname}/index.desk.html`);

  // ���ÿ������ߡ�
  mainWindow.webContents.openDevTools();

  // �� window ���رգ�����¼��ᱻ������
  mainWindow.on('closed', () => {
    // ȡ������ window ����������Ӧ��֧�ֶര�ڵĻ���
    // ͨ����Ѷ�� window ��������һ���������棬
    // ���ͬʱ����Ӧ��ɾ����Ӧ��Ԫ�ء�
    mainWindow = null;
  });
}

// Electron ���ڳ�ʼ����׼��
// �������������ʱ���������������
// ���� API �� ready �¼����������ʹ�á�
app.on('ready', createWindow);

// ��ȫ�����ڹر�ʱ�˳���
app.on('window-all-closed', () => {
  // �� macOS �ϣ������û��� Cmd + Q ȷ�����˳���
  // ������󲿷�Ӧ�ü���˵����ᱣ�ּ��
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // �� macOS �ϣ������ dock ͼ�겢�Ҹ�Ӧ��û�д򿪵Ĵ���ʱ��
  // ���󲿷�Ӧ�û����´���һ�����ڡ�
  if (mainWindow === null) {
    createWindow();
  }
});

// �����ļ����������дӦ��ʣ�������̴��롣
// Ҳ���Բ�ֳɼ����ļ���Ȼ���� require ���롣