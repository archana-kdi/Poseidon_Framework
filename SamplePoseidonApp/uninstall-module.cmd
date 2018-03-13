@ECHO OFF
SET moduleInstaller="%programfiles(x86)%/KDI/Poseidon/Poseidon.Module.Installer.exe"
SET moduleId=657da9d1-82f3-4a9e-bd17-c0f2df6c15ca
CALL %moduleInstaller% uninstall %moduleId%
PAUSE