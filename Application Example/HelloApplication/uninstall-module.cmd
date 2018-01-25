@ECHO OFF
SET moduleInstaller="%programfiles(x86)%/KDI/Poseidon/Poseidon.Module.Installer.exe"
SET moduleId=3af762bf-db0a-4ab7-a288-ef13e4691328
CALL %moduleInstaller% uninstall %moduleId%
PAUSE