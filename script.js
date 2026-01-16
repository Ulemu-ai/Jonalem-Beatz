/* ==================== COMPACT BEAT LISTING ==================== */

/* Add view toggle button */
.view-toggle {
    position: fixed;
    bottom: 130px;
    right: 20px;
    background: var(--primary);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);
    border: none;
    font-size: 1.2rem;
}

/* Compact beats container */
.compact-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem 2rem;
}

/* Ultra-compact beat cards */
.compact-beats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 1rem;
}

.compact-beat-card {
    background: rgba(30, 41, 59, 0.8);
    border-radius: 10px;
    padding: 12px;
    border: 1px solid rgba(124, 58, 237, 0.2);
    transition: var(--transition);
    position: relative;
    height: 90px; /* FIXED HEIGHT */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    backdrop-filter: blur(5px);
}

.compact-beat-card:hover {
    transform: translateY(-2px);
    border-color: var(--primary);
    background: rgba(30, 41, 59, 0.95);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

/* Compact beat header */
.compact-beat-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
}

.compact-beat-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--light-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
}

.compact-price-tag {
    background: var(--secondary);
    color: #000;
    padding: 3px 8px;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 800;
    white-space: nowrap;
}

.compact-beat-id {
    font-size: 0.65rem;
    color: var(--gray-text);
    margin-bottom: 5px;
}

/* Compact beat info row */
.compact-beat-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.compact-beat-genre {
    font-size: 0.75rem;
    color: var(--primary);
    background: rgba(124, 58, 237, 0.1);
    padding: 3px 8px;
    border-radius: 10px;
    border: 1px solid rgba(124, 58, 237, 0.3);
}

/* Compact player controls */
.compact-player-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: auto;
}

.compact-play-btn {
    background: var(--primary);
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.compact-progress-container {
    flex: 1;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
}

.compact-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--secondary), var(--primary));
    width: 0%;
    transition: width 0.1s linear;
}

.compact-time {
    font-size: 0.65rem;
    color: var(--gray-text);
    min-width: 35px;
    text-align: right;
}

/* Purchase button in compact view */
.compact-buy-btn {
    background: rgba(124, 58, 237, 0.2);
    color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 0.7rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    width: 100%;
    margin-top: 5px;
    text-align: center;
}

.compact-buy-btn:hover {
    background: var(--primary);
    color: white;
}

.compact-buy-btn.unlocked {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    border-color: #10b981;
}

/* Status indicator */
.compact-status {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.compact-status.unlocked {
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
}

.compact-status.locked {
    background: var(--secondary);
    box-shadow: 0 0 8px var(--secondary);
}

/* Responsive adjustments for compact view */
@media (max-width: 768px) {
    .compact-beats-grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 10px;
    }
    
    .compact-beat-card {
        height: 85px;
        padding: 10px;
    }
    
    .compact-beat-title {
        font-size: 0.85rem;
        max-width: 90px;
    }
}

@media (max-width: 576px) {
    .compact-beats-grid {
        grid-template-columns: repeat(3, 1fr); /* 3 columns on mobile */
        gap: 8px;
    }
    
    .compact-beat-card {
        height: 80px;
        padding: 8px;
    }
    
    .compact-beat-title {
        font-size: 0.8rem;
        max-width: 80px;
    }
    
    .compact-price-tag {
        font-size: 0.65rem;
        padding: 2px 6px;
    }
}

@media (max-width: 400px) {
    .compact-beats-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 columns on very small */
        gap: 8px;
    }
    
    .compact-beat-card {
        height: 85px;
    }
}

/* List view alternative (even more compact) */
.list-view .compact-beats-grid {
    grid-template-columns: 1fr;
    gap: 6px;
}

.list-view .compact-beat-card {
    height: 60px;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
}

.list-view .compact-beat-header {
    flex: 1;
    margin-bottom: 0;
    margin-right: 15px;
}

.list-view .compact-player-controls {
    margin-top: 0;
    width: 120px;
}

.list-view .compact-buy-btn {
    width: auto;
    margin-top: 0;
    margin-left: 10px;
    padding: 4px 10px;
}

/* Filter and search for compact view */
.compact-controls {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.compact-search {
    flex: 1;
    min-width: 200px;
    padding: 10px 15px;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 8px;
    color: var(--light-text);
}

.compact-genre-filter {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 5px;
}

.compact-genre-btn {
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(124, 58, 237, 0.2);
    color: var(--gray-text);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    white-space: nowrap;
    cursor: pointer;
    transition: var(--transition);
}

.compact-genre-btn:hover,
.compact-genre-btn.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}