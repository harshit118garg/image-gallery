export const Loading = () => {
  return (
    <div className="loadingContainer" data-testid="loader">
      <div className="loadingBox">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
    </div>
  );
};
