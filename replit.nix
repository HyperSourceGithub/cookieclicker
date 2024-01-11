{ pkgs }: {
  deps = [
    pkgs.texinfoInteractive
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}